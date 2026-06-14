const getAvailableFilters = (products) => {
  const filters = {};

  products.forEach((product) => {
    if (product.category && product.category.brend) {
      const brend = product.category.brend.trim();
      if (!filters["Brend"]) {
        filters["Brend"] = new Set();
      }
      filters["Brend"].add(brend);
    }
    if (product.property) {
      product.property.forEach((prop) => {
        // Normalize name to capitalized and trimmed (e.g., " video karta " -> "Video karta")
        const trimmedName = prop.name.trim();
        const normalizedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
        
        if (!filters[normalizedName]) {
          filters[normalizedName] = new Set();
        }
        prop.types.forEach((type) => {
          if (type) {
            filters[normalizedName].add(type.trim());
          }
        });
      });
    }
  });

  const result = Object.keys(filters).map((name) => ({
    name,
    values: Array.from(filters[name]).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })),
  }));

  return result;
};

export default getAvailableFilters;
