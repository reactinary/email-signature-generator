## Preview

![email-generator](email-generator.gif)

## .env Setup

```js
# Locally
DATABASE_URL="postgresql://postgres:< YOUR_PASSWORD >@localhost:5434/mydb?schema=public"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
```

To get your NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME from Cloudinary :
1. Create an account
2. Go to Programmable Media > Getting started
3. Copy/Paste `cloud_name` (should look like `dzsye542r`)


You will also need to add your own UploadPreset in the CldUploadBtn:

```js
// create/page.tsx

  <CldUploadButton
    (...)
    uploadPreset="fuv4kfwy" // <----- you need to change this
  />
</Button>
```

1. Go to Settings > Upload > Upload Presets > Add upload preset
2. Copy/Paste
