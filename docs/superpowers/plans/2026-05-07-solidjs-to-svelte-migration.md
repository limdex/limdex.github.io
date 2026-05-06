# SolidJS to Svelte Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the SolidJS + Vite + SCSS codebase in `my_porto` with the SvelteKit + Tailwind CSS codebase from `porto`, preserving git history.

**Architecture:** Stage-delete all current tracked files, copy the entire Svelte codebase in via Robocopy (excluding git, generated, and dependency dirs), commit the migration, then install dependencies.

**Tech Stack:** SvelteKit 2, Svelte 5, Tailwind CSS 4, @sveltejs/adapter-static, Vite, TypeScript

---

### Task 1: Stage deletion of all current SolidJS files

**Files:**
- Modify: all tracked files in `C:\Users\LimX\Work\self\my_porto`

- [ ] **Step 1: Stage deletion of all tracked files**

  Run from `C:\Users\LimX\Work\self\my_porto`:

  ```powershell
  git rm -rf .
  ```

  Expected output includes lines like:
  ```
  rm 'index.html'
  rm 'src/App.tsx'
  rm 'src/index.tsx'
  rm 'src/components/Navbar/...'
  ...
  ```

- [ ] **Step 2: Verify staging**

  ```powershell
  git status
  ```

  Expected: All previously tracked files shown under `Changes to be committed: deleted:`. Working tree is otherwise clean.

---

### Task 2: Copy Svelte codebase into my_porto

**Files:**
- Create: all files from `C:\Users\LimX\Work\self\porto` except excluded dirs

- [ ] **Step 1: Run Robocopy to copy Svelte files**

  ```powershell
  robocopy "C:\Users\LimX\Work\self\porto" "C:\Users\LimX\Work\self\my_porto" /E /XD ".git" "node_modules" ".svelte-kit" "build" ".legacy-static"
  ```

  Flags:
  - `/E` — copy all subdirectories including empty ones
  - `/XD` — exclude the listed directory names anywhere in the tree

  Robocopy exit codes: **1 = files copied (success)**, 0 = nothing to copy, ≥ 8 = error.

- [ ] **Step 2: Verify key files landed**

  ```powershell
  Test-Path "C:\Users\LimX\Work\self\my_porto\svelte.config.js"
  Test-Path "C:\Users\LimX\Work\self\my_porto\src\routes\+page.svelte"
  Test-Path "C:\Users\LimX\Work\self\my_porto\package.json"
  ```

  Expected: All three return `True`.

- [ ] **Step 3: Confirm generated/dep dirs were NOT copied**

  ```powershell
  Test-Path "C:\Users\LimX\Work\self\my_porto\node_modules"
  Test-Path "C:\Users\LimX\Work\self\my_porto\.svelte-kit"
  Test-Path "C:\Users\LimX\Work\self\my_porto\build"
  ```

  Expected: All three return `False`.

---

### Task 3: Stage and commit the migration

- [ ] **Step 1: Stage all incoming Svelte files**

  ```powershell
  git add .
  ```

- [ ] **Step 2: Review staged changes**

  ```powershell
  git status
  ```

  Expected: New SvelteKit files under `new file:` and old SolidJS files under `deleted:`.

- [ ] **Step 3: Commit the migration**

  ```powershell
  git commit -m @'
  feat: replace SolidJS codebase with SvelteKit

  Swap out Vite+SolidJS+SCSS for SvelteKit+Svelte5+TailwindCSS4.
  Source: C:\Users\LimX\Work\self\porto

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  '@
  ```

  Expected:
  ```
  [main xxxxxxx] feat: replace SolidJS codebase with SvelteKit
   N files changed, M insertions(+), K deletions(-)
  ```

---

### Task 4: Install dependencies and verify

- [ ] **Step 1: Install npm dependencies**

  ```powershell
  npm install
  ```

  Expected: `node_modules/` created. Warnings about peer deps are acceptable; errors are not.

- [ ] **Step 2: Verify dev server starts**

  ```powershell
  npm run dev
  ```

  Expected output includes:
  ```
    VITE vX.X.X  ready in XXX ms

    ➜  Local:   http://localhost:5173/
  ```

  Press `Ctrl+C` to stop once confirmed.
