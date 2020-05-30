exports.create = (request) => {
  const errors = [];
  if (request.title === "") {
    errors.push("ظاهرا فراموش کرده اید که عنوانی برای مطلب خود قرار دهید :)");
  }
  if (request.slug === "") {
    errors.push("ظاهرا فراموش کرده اید که عنوان انگلیسی برای مطلب خود قرار دهید :)");
  }
  return errors;
};
