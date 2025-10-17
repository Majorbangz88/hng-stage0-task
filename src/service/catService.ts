export class GetCatFacts {
    static async getCatFacts() {

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        try {
            const response = await fetch('https://catfact.ninja/fact', { signal: controller.signal });

            if (!response.ok) {
                throw new Error(`Failed to fetch cat fact: ${response.statusText}`);
            }

            const data = await response.json();
            return data.fact;
        } catch (error: any) {
            if (error.name === 'AbortError') {
                throw new Error('Request timed out while fetching cat fact');
            }
            throw error;
        } finally {
            clearTimeout(timeout);
        }
    }
}