-- Private invoice PDFs for the Production owner tools.
begin;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('owner-invoices-prod', 'owner-invoices-prod', false, 20971520, array['application/pdf'])
on conflict (id) do update
set public = false, file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

-- Restrictive policies also constrain any broader storage policies.
drop policy if exists "Production invoices isolation" on storage.objects;
create policy "Production invoices isolation" on storage.objects
as restrictive for all to anon, authenticated
using (bucket_id <> 'owner-invoices-prod'
       or ((select auth.uid()) is not null and (select public.is_app_owner()) is true))
with check (bucket_id <> 'owner-invoices-prod'
            or ((select auth.uid()) is not null and (select public.is_app_owner()) is true
                and name ~ '^[0-9]{10}[.]pdf$' and name <> '0000000000.pdf'));

drop policy if exists "Production invoices read" on storage.objects;
create policy "Production invoices read" on storage.objects
for select to authenticated
using (bucket_id = 'owner-invoices-prod' and (select public.is_app_owner()) is true);

drop policy if exists "Production invoices upload" on storage.objects;
create policy "Production invoices upload" on storage.objects
for insert to authenticated
with check (bucket_id = 'owner-invoices-prod' and (select public.is_app_owner()) is true);

drop policy if exists "Production invoices delete" on storage.objects;
create policy "Production invoices delete" on storage.objects
for delete to authenticated
using (bucket_id = 'owner-invoices-prod' and (select public.is_app_owner()) is true);

drop policy if exists "Production invoices no overwrite" on storage.objects;
create policy "Production invoices no overwrite" on storage.objects
as restrictive for update to anon, authenticated
using (bucket_id <> 'owner-invoices-prod')
with check (bucket_id <> 'owner-invoices-prod');

commit;
