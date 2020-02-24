window.Interop = {
  validateProduct: (product) => {
    try {
      return DotNet.invokeMethod('BlazorPOC', 'ValidateProduct', product);
    } catch (err) {
      console.log("error - ", err);
    }
    return "No result";
  },
};
