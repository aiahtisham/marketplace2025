/** @type {import('next').NextConfig} */

import { hostname } from "os";

const nextConfig = {
  images: {
     domains : ['cdn.sanity.io'],
  }
};
module.exports = nextConfig;
