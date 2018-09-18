let fxf = "http://res.cloudinary.com/mwong9968/image/upload/v1524423979/highland-4-22-18/45/";
let f = "http://res.cloudinary.com/mwong9968/image/upload/v1524411975/highland-4-22-18/frozen/";
let su = "http://res.cloudinary.com/mwong9968/image/upload/v1524423758/highland-4-22-18/square/";
let imageurls = [];
let frozenurls = [];
let squareurls = [];
for (let i = 1; i < 10; i++) {
  imageurls.push(fxf + i + '.jpg');
  frozenurls.push(f + i + '.jpg');
  squareurls.push(su + i + '.jpg');
}

for (let i = 11; i < 14; i++) {
  imageurls.push(fxf + i + '.jpg');
  frozenurls.push(f + i + '.jpg');
  squareurls.push(su + i + '.jpg');
}

for (let i = 15; i < 17; i++) {
  imageurls.push(fxf + i + '.jpg');
  frozenurls.push(f + i + '.jpg');
  squareurls.push(su + i + '.jpg');
}

for (let i = 18; i < 55; i++) {
  imageurls.push(fxf + i + '.jpg');
  frozenurls.push(f + i + '.jpg');
  squareurls.push(su + i + '.jpg');
}

for (let i = 56; i < 73; i++) {
  imageurls.push(fxf + i + '.jpg');
  frozenurls.push(f + i + '.jpg');
  squareurls.push(su + i + '.jpg');
}

export const imageURLs = imageurls;
export const frozenURLs = frozenurls;
export const  squareURLs = squareurls;

let c = [];
for (let i = 1; i < 100; i++) {
  c.push(i.toString());
}

export const captions = c;
