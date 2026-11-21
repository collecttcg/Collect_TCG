select vault.create_secret(encode(extensions.gen_random_bytes(32), 'hex'), 'ebay_inventory_schedule_key')
where not exists (select 1 from vault.secrets where name = 'ebay_inventory_schedule_key');
create or replace function public.verify_ebay_inventory_schedule_key(candidate text)
returns boolean language sql stable security invoker set search_path = ''
as $$
  select exists (
    select 1 from vault.decrypted_secrets
    where name = 'ebay_inventory_schedule_key' and decrypted_secret = candidate
  );
$$;
revoke all on function public.verify_ebay_inventory_schedule_key(text) from public, anon, authenticated;
grant execute on function public.verify_ebay_inventory_schedule_key(text) to service_role;

select cron.schedule('collect-tcg-ebay-inventory-daily', '30 0 * * *', $job$
select net.http_post(url := 'https://cbzytysxtdcqxuckspye.supabase.co/functions/v1/ebay-listing-check', headers := jsonb_build_object('x-inventory-schedule-key', (select decrypted_secret from vault.decrypted_secrets where name = 'ebay_inventory_schedule_key'), 'content-type','application/json'), body := '{"apply":true}'::jsonb, timeout_milliseconds := 120000);
$job$);
