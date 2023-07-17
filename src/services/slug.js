export const slug = (title) => {
    const replaced = title.replace(/['~"#“‘`]+/g, "");
    const slug = replaced
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return slug;
  };