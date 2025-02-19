import { render } from '@testing-library/react';
import { expect,test } from 'vitest';
import Pizza from '../Pizza';




test("alt test renders on Pizza image", async () => {
    const name = "My Favorite Pizza";
    const src = "https://picsum.photos/200";
    const screen = render(
        <Pizza name={name} description="Super delicious pizza" image={src} />
    );

    const img = screen.getByRole("img");
    expect(img.src).toBe(src);
    expect(img.alt).toBe(name);
   
});

