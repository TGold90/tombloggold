


export const getAllArticles = () => {
    return fetch("/api/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

export const getOneArticle = (id) => {
    return fetch(`/api/articles/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
}