import { jsx } from 'react/jsx-runtime.js';
import Image from 'next/image.js';

/**
 * The default import does not resolve correctly:
 *  
 * { Image: { default: [Function: Image] } }
 */
console.log({ Image });

/**
 * Thus, React's JSX runtime breaks, because the import is an object and not a
 * component.
 * 
 * {
 *    '$$typeof': Symbol(react.element),
 *    type: { default: [Function: Image] },
 *    ...
 * }
 */
console.log(
  jsx(
    Image /* Image.default works */,
    { src: 'https://via.placeholder.com/150' }
  )
);