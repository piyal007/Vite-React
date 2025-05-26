# React + Vite
$ npm create vite@latest your-name -- --template react
# Tailwind CSS
$ npm install tailwindcss @tailwindcss/vite
- import tailwindcss from '@tailwindcss/vite' 
- tailwindcss()
- @import "tailwindcss";
# Daisy UI
$ npm i -D daisyui@latest 
- @plugin "daisyui";
# React Router

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

>const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    ```sh
  <RouterProvider router={router} />
  ```
);


# React Icons
$ npm i react-icons

# Sweet Alert
$ npm install sweetalert2
- import Swal from 'sweetalert2'
# React Toastify
$ npm i react-toastify
- import { ToastContainer, toast } from 'react-toastify';
# React Hot Toast
$ npm install react-hot-toast
- import toast, { Toaster } from 'react-hot-toast';
