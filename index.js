async function fetchData() {
    try {
        const response = await fetch('');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
    catch (error) {
        console.error('Error fetching users:', error)
    }
}