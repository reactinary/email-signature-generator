## Preview

![email-generator](email-generator.gif)

## .env Setup

```js
# Locally
DATABASE_URL="postgresql://postgres:< YOUR_PASSWORD >@localhost:5434/mydb?schema=public"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=""
```

To get your NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME from Cloudinary :
1. Create an account
2. Go to Programmable Media > Getting started
3. Copy/Paste `cloud_name` (should look like `dzsye542r`)

----

To get your NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET from Cloudinary :
1. Go to Settings > Upload > Upload Presets > Add upload preset
2. Copy/Paste (should like like 'fuv4kfvy')
