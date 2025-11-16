# Streamlit Live Trends Dashboard Setup

## How to Add Your Streamlit Link

To add your Streamlit Live Trends Dashboard link, edit **`client/pages/Trends.tsx`** at **line 150**:

```jsx
<a
  href="PASTE_YOUR_STREAMLIT_LINK_HERE" // ← Replace the "#" with your streamlit URL
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-secondary/80 to-secondary text-white font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 w-full"
>
  Explore Live Trends Dashboard
  <Zap className="w-5 h-5" />
</a>
```

### Step-by-Step Instructions:

1. Open the file: `client/pages/Trends.tsx`
2. Navigate to **line 150** (the anchor tag)
3. Replace `"#"` in the `href` attribute with your Streamlit app URL
4. Example: `href="https://your-streamlit-app.streamlit.app/"`
5. Save the file

### Example:

```jsx
<a
  href="https://trend-prediction-youtube.streamlit.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-secondary/80 to-secondary text-white font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 w-full"
>
  Explore Live Trends Dashboard
  <Zap className="w-5 h-5" />
</a>
```

The button will now link to your Streamlit Live Trends Dashboard when clicked!
