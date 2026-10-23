create table public."tobi-rsvps" (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null
    check (char_length(btrim(guest_name)) between 1 and 120),
  attendance text not null
    check (attendance in ('yes', 'no')),
  message text
    check (message is null or char_length(message) <= 1000),
  created_at timestamptz not null default now()
);

alter table public."tobi-rsvps" enable row level security;

revoke all on table public."tobi-rsvps" from public, anon, authenticated;
grant insert on table public."tobi-rsvps" to anon, authenticated;

create policy "Allow public RSVP submissions"
  on public."tobi-rsvps"
  for insert
  to anon, authenticated
  with check (true);
