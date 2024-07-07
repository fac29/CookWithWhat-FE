//
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const deleteRecipe = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/recipe/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
            // If the response is JSON, parse it
            const result = await response.json();
            return result;
        } else {
            // If the response is not JSON, return the response text
            const result = await response.text();
            return result;
        }
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        } else {
            alert("An unexpected error occurred");
        }
    }
};
