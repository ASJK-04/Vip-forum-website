/*
# Create contacts table for VIP Forum community signups

1. New Tables
- `contacts`
- `id` (uuid, primary key, auto-generated)
- `full_name` (text, not null) — user's full name
- `profession` (text, not null) — selected profession/field
- `email` (text, not null) — email address
- `phone` (text, nullable) — phone number
- `message` (text, nullable) — how they want to contribute
- `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contacts`.
- Allow anonymous (public) inserts so anyone can join via the contact form.
- Allow anonymous reads for admin/management purposes.
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  profession text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contacts" ON contacts;
CREATE POLICY "anon_select_contacts" ON contacts FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contacts" ON contacts;
CREATE POLICY "anon_insert_contacts" ON contacts FOR INSERT
TO anon, authenticated WITH CHECK (true);
