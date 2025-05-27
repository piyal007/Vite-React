# React + Vite
```sh
npm create vite@latest your-name -- --template react
```
## Tailwind CSS
```sh
npm install tailwindcss @tailwindcss/vite
```
```sh
import tailwindcss from '@tailwindcss/vite'
```
```sh
tailwindcss()
```
```sh
@import "tailwindcss";
```
## Daisy UI

```sh
npm i -D daisyui@latest
```
```sh
@plugin "daisyui";
```
## React Router

```sh
npm i react-router
```

```sh
import { createBrowserRouter, RouterProvider, } from "react-router";
```

> import React from "react";
> import ReactDOM from "react-dom/client";

```sh
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);
```

> const root = document.getElementById("root");

```sh
ReactDOM.createRoot(root).render(

  <RouterProvider router={router} />
  
);
```


## React Icons
```sh
npm i react-icons
```

## Sweet Alert
```sh
npm install sweetalert2
```
```sh
import Swal from 'sweetalert2'
```
## React Toastify
```sh
npm i react-toastify
```
```sh
import { ToastContainer, toast } from 'react-toastify';
```
## React Hot Toast
```sh
npm install react-hot-toast
```
```sh
import toast, { Toaster } from 'react-hot-toast';
```

## RSC
```bash
import React from 'react';

const Navbar = () => {
  return (
    <>
      
    </>
  );
};

export default Navbar;
```