const getImgSrc = name => {
  if (typeof name === "undefined") return "error.png";
  const path = `/src/assets/img/${name}`;
  const modules = import.meta.glob("@/assets/img/*.png", {
    eager: true
  });
  console.log(modules);
  return modules[path]?.default;
};

export default getImgSrc;
