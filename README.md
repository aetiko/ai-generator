# AI Image Generator App 🎨🎮

This is an AI-powered image generator built using **React JS** and the **OpenAI API**. The app generates images based on text descriptions entered by the user.

## ✨ Features

- Generates images based on user input.
- Uses the OpenAI API to create high-quality AI-generated images.
- Simple and clean UI with a responsive design.
- Displays a loading animation while fetching images.

## 🛠️ Technologies Used

- React JS
- OpenAI API
- CSS for styling

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/ai-image-generator.git
cd ai-image-generator
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up OpenAI API Key

Create a **.env** file in the root directory and add your OpenAI API key:

```sh
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

### 4️⃣ Run the Application

```sh
npm start
```

The app will start on `http://localhost:3000/`.

---

## 🖥️ Code Example

Below is the main function responsible for generating images using OpenAI's API:

```js
const imageGenerator = async () => {
  if (inputRef.current.value === "") {
    return;
  }
  setLoading(true);
  const response = await fetch(
    "https://api.openai.com/v1/images/generations",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `${inputRef.current.value}`,
        n: 1,
        size: "512x512",
      }),
    }
  );
  let data = await response.json();
  setImage_url(data.data[0].url);
  setLoading(false);
};
```

## 📸 Screenshot

<p align="center">
  <img src="assets/ai-1.png" alt="AI Image Generator" width="600" height="400">
</p>
<p align="center">
  <img src="assets/ai-2.png" alt="AI Image Generator" width="600" height="400">
</p>
<p align="center">
  <img src="assets/ai-3.png" alt="AI Image Generator" width="600" height="400">
</p>

## 🔥 Future Enhancements

- Add more image size options.
- Enable downloading generated images.
- Implement a history feature to save past generations.

## 🤝 Contributing

Feel free to contribute by forking the repo and submitting a pull request!

