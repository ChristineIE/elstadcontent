// Central place for personal details.
// Anything wrapped in [square brackets] is shown on the site as a marked placeholder.

export const siteConfig = {
  name: "Christine Elstad",
  email: "christine@elstadcontent.no",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/christine-elstad-665195148/",
      display: "Christine Elstad",
    },
  ],
};

export const isPlaceholder = (value) => /^\[.*\]$/.test(value);
