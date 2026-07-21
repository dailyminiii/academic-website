# Minwoo Seong — Academic Website

Source for [minwooseong.com](https://minwooseong.com), built with Jekyll and the existing Academic Pages theme.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/`.

## Content structure

- `_data/research.yaml` — publication records, links, status, contribution, themes, awards, and selected-work metadata
- `_data/publication_metadata.yml` — publication filter labels and values
- `_data/research_program.yml` — homepage research-vision copy
- `_data/about.yaml` — profile, affiliations, education, and contact links
- `index.md` — research-focused homepage
- `_pages/publications.md` — selected and filterable complete publication record
- `_pages/extras.md` — creative projects, visits, music, and hobbies

Only published or accepted work should appear in the public publication interface. Keep private, under-review, and ongoing work out of public site data.
