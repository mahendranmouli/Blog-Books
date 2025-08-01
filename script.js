function toggleDescription(button) {
  const desc = button.previousElementSibling;
  if (desc.classList.contains('short')) {
    desc.textContent += " This book delves deeper into its theme with rich storytelling and impactful messages.";
    desc.classList.remove('short');
    button.textContent = "Show Less";
  } else {
    const originalText = desc.textContent.split(" This book")[0];
    desc.textContent = originalText;
    desc.classList.add('short');
    button.textContent = "Read More";
  }
}
