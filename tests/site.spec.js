import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for(const width of [1440,1280,1024,768,430,390,375]){
  test(`layout and navigation at ${width}px`,async({page})=>{
    await page.setViewportSize({width,height:900});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto('/');await page.emulateMedia({reducedMotion:'reduce'});
    await expect(page.getByRole('heading',{level:1})).toBeVisible();
    for(const id of ['services','products','markets','about','profile','contact']){
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
    }
    expect(await page.locator('img').evaluateAll(images=>images.every(i=>i.complete&&i.naturalWidth>0))).toBeTruthy();
    if(width<1200){
      await page.getByRole('button',{name:'Open menu'}).click();
      await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeVisible();
      await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Products',exact:true}).click();
      await expect(page.getByRole('button',{name:'Open menu'})).toHaveAttribute('aria-expanded','false');
    }
    expect(errors).toEqual([]);
  });
}
test('product inquiry, validation, email draft, and legal dialogs',async({page})=>{
  await page.goto('/');await page.emulateMedia({reducedMotion:'reduce'});
  await page.locator('.product-detail a').first().click();
  await expect(page.getByLabel('Inquiry type')).toHaveValue('Agricultural Products');
  await expect(page.getByLabel('How can we help?')).toHaveValue(/agricultural inputs/);
  await page.getByRole('button',{name:'Submit Inquiry'}).click();
  await expect(page.locator('#email-draft')).toBeHidden();
  await page.getByLabel('Name (required)',{exact:true}).fill('Test Grower');
  await page.getByLabel('Email (required)',{exact:true}).fill('grower@example.com');
  await page.getByRole('button',{name:'Submit Inquiry'}).click();
  await expect(page.getByRole('status')).toContainText('has not been sent');
  await expect(page.locator('#email-draft')).toHaveAttribute('href',/^mailto:v\.tanguilig@gmail\.com\?/);
  await page.getByLabel('How can we help?').fill('Updated inquiry about agricultural support.');
  await expect(page.locator('#email-draft')).toBeHidden();
  await page.getByRole('button',{name:'Privacy Policy',exact:true}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toBeHidden();
});
test('mobile keyboard navigation and reduced motion',async({page})=>{
  await page.setViewportSize({width:390,height:844});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
  const toggle=page.getByRole('button',{name:'Open menu'});await toggle.click();await page.keyboard.press('Escape');await expect(toggle).toBeFocused();
  expect(await page.evaluate(()=>window.getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await page.locator('#profile').scrollIntoViewIfNeeded();await expect(page.getByRole('heading',{name:'Valerio Tanguilig'})).toBeVisible();
});
test('automated accessibility scan on desktop and mobile',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const width of [1440,390]){
    await page.setViewportSize({width,height:900});await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
  }
});
