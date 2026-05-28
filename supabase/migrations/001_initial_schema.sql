-- ─── Extensions ──────────────────────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Leads ───────────────────────────────────────────────────────────────────
create table if not exists public.leads (
  id              uuid primary key default uuid_generate_v4(),
  first_name      text not null,
  last_name       text not null,
  email           text not null,
  phone           text,
  company         text,
  industry        text,
  message         text,
  source          text not null default 'website',
  utm_source      text,
  utm_medium      text,
  utm_campaign    text,
  status          text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

alter table public.leads enable row level security;

-- Service role can read/write all leads
create policy "service_role_leads" on public.leads
  for all using (auth.role() = 'service_role');

-- Anonymous users can INSERT (form submissions)
create policy "anon_insert_leads" on public.leads
  for insert with check (true);

-- ─── Blog Posts ───────────────────────────────────────────────────────────────
create table if not exists public.blog_posts (
  id              uuid primary key default uuid_generate_v4(),
  title           text not null,
  slug            text not null unique,
  excerpt         text not null,
  content         text not null,
  author          text not null default 'RapidSEED AI Team',
  published       boolean not null default false,
  featured_image  text,
  tags            text[] not null default '{}',
  meta_title      text,
  meta_description text,
  og_image        text,
  reading_time    integer,
  published_at    timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

alter table public.blog_posts enable row level security;

-- Anyone can read published posts
create policy "public_read_published_posts" on public.blog_posts
  for select using (published = true);

-- Service role full access
create policy "service_role_posts" on public.blog_posts
  for all using (auth.role() = 'service_role');

-- ─── FAQs ─────────────────────────────────────────────────────────────────────
create table if not exists public.faqs (
  id          uuid primary key default uuid_generate_v4(),
  question    text not null,
  answer      text not null,
  category    text,
  sort_order  integer not null default 0,
  published   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.faqs enable row level security;

create policy "public_read_faqs" on public.faqs
  for select using (published = true);

create policy "service_role_faqs" on public.faqs
  for all using (auth.role() = 'service_role');

-- ─── Case Studies ─────────────────────────────────────────────────────────────
create table if not exists public.case_studies (
  id                  uuid primary key default uuid_generate_v4(),
  title               text not null,
  slug                text not null unique,
  industry            text not null,
  client_type         text not null,
  challenge           text not null,
  solution            text not null,
  results             jsonb not null default '[]',
  before_metrics      jsonb not null default '{}',
  after_metrics       jsonb not null default '{}',
  testimonial         text,
  testimonial_author  text,
  published           boolean not null default false,
  featured_image      text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

alter table public.case_studies enable row level security;

create policy "public_read_case_studies" on public.case_studies
  for select using (published = true);

create policy "service_role_case_studies" on public.case_studies
  for all using (auth.role() = 'service_role');

-- ─── Industries ───────────────────────────────────────────────────────────────
create table if not exists public.industries (
  id              uuid primary key default uuid_generate_v4(),
  slug            text not null unique,
  name            text not null,
  headline        text not null,
  subheadline     text not null,
  description     text not null,
  challenges      text[] not null default '{}',
  solutions       text[] not null default '{}',
  published       boolean not null default true,
  meta_title      text,
  meta_description text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

alter table public.industries enable row level security;

create policy "public_read_industries" on public.industries
  for select using (published = true);

create policy "service_role_industries" on public.industries
  for all using (auth.role() = 'service_role');

-- ─── Updated at trigger ───────────────────────────────────────────────────────
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger leads_updated_at before update on public.leads
  for each row execute function public.handle_updated_at();

create trigger blog_posts_updated_at before update on public.blog_posts
  for each row execute function public.handle_updated_at();

create trigger faqs_updated_at before update on public.faqs
  for each row execute function public.handle_updated_at();

create trigger case_studies_updated_at before update on public.case_studies
  for each row execute function public.handle_updated_at();

create trigger industries_updated_at before update on public.industries
  for each row execute function public.handle_updated_at();

-- ─── Indexes ──────────────────────────────────────────────────────────────────
create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists blog_posts_slug_idx on public.blog_posts (slug);
create index if not exists blog_posts_published_idx on public.blog_posts (published, published_at desc);
create index if not exists faqs_sort_order_idx on public.faqs (sort_order);
create index if not exists case_studies_slug_idx on public.case_studies (slug);
create index if not exists industries_slug_idx on public.industries (slug);
