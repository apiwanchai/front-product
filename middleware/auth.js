export default function ({ route, redirect }) {
  if (process.browser) {
    const token = localStorage.getItem("token");

    if (route.name === "login" && token) {
      return redirect("/products");
    }

    if (!token && route.name !== "login") {
      return redirect("/login");
    }
  }
}
