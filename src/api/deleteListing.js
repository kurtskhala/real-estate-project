export async function deleteListing(id) {
  const url = `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${id}`;

  const token = "9d0edd5e-8c31-46e9-8c85-552fab1a74bc";

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Response:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
