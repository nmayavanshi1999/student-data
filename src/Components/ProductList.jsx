import { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'GYM', price: 30 },
    { id: 2, name: 'MORE', price: 10 },
    { id: 3, name: 'BRUSH', price: 20 },
    { id: 4, name: 'MOP', price: 250 },
    { id: 5, name: 'ROLL', price: 247 },
    { id: 6, name: 'PEN', price: 25 },
    { id: 7, name: 'IPHONE 16 PRO', price: 85000 },
    { id: 8, name: 'SAMSUNG S25 ULTRA', price: 78000 },
    { id: 9, name: 'DELL INSPIRON 15', price: 45000 },
    { id: 10, name: 'HP PAVILION X360', price: 52000 },
    { id: 11, name: 'SONY WH1000XM5', price: 28000 },
    { id: 12, name: 'BOSE QUIET 45', price: 22000 },
    { id: 13, name: 'NIKE AIR MAX 90', price: 8500 },
    { id: 14, name: 'ADIDAS ULTRABOOST', price: 12000 },
    { id: 15, name: 'PEUGEOT 208 GT', price: 950000 },
    { id: 16, name: 'TOYOTA COROLLA', price: 1250000 }
  ]);

  const sortByName = () => {
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sorted);
  };

  const sortByPrice = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  return (
    <div className="container">
      <div className="table-card">
        <div className="table-header">
          <h2>Product Inventory</h2>
          <div className="stats">
            Total Items: <span className="stat-number">{products.length}</span>
          </div>
        </div>
        
        <div className="table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th className="sortable-header" onClick={sortByName}>
                  <div className="header-content">
                    Product Name
                    <span className="sort-indicator">↕</span>
                  </div>
                </th>
                <th className="sortable-header" onClick={sortByPrice}>
                  <div className="header-content">
                    Price (₹)
                    <span className="sort-indicator">↕</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="product-row">
                  <td className="product-cell name-cell">{item.name}</td>
                  <td className="product-cell price-cell">
                    ₹{item.price.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx global>{`
        .container {
          max-width: 1000px;
          margin: 20px auto;
          padding: 0 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .table-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }

        .table-header {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .table-header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }

        .stats {
          font-size: 16px;
          font-weight: 500;
        }

        .stat-number {
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          margin-left: 8px;
        }

        .table-container {
          overflow-x: auto;
        }

        .product-table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
        }

        .product-table thead tr {
          border-bottom: 3px solid #f3f4f6;
        }

        .sortable-header {
          cursor: pointer;
          user-select: none;
          transition: background-color 0.2s;
        }

        .sortable-header:hover .header-content {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          padding: 12px;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          font-weight: 600;
          color: #1f2937;
          font-size: 15px;
        }

        .sort-indicator {
          font-size: 14px;
          opacity: 0.6;
          transition: transform 0.2s;
        }

        .product-row {
          border-bottom: 1px solid #f3f4f6;
          transition: background-color 0.15s;
        }

        .product-row:hover {
          background: #f9fafb;
        }

        .product-row:last-child {
          border-bottom: none;
        }

        .product-cell {
          padding: 16px 24px;
          vertical-align: middle;
        }

        .name-cell {
          font-weight: 500;
          color: #111827;
          font-size: 16px;
          min-width: 250px;
        }

        .price-cell {
          font-weight: 700;
          color: #059669;
          font-size: 18px;
          text-align: right;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .table-header {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          
          .header-content {
            padding: 12px 16px;
            font-size: 14px;
          }
          
          .product-cell {
            padding: 12px 16px;
            font-size: 14px;
          }
          
          .name-cell {
            min-width: 180px;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductList;
