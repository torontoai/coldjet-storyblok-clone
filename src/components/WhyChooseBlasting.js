import React from 'react';
import './WhyChooseBlasting.css';

const WhyChooseBlasting = ({ blok = {} }) => {
  const {
    kicker = 'Why Choose Dry Ice Blasting?',
    title = 'A Cleaner, Faster, and More Sustainable Approach to Industrial Cleaning',
    description = 'Discover the benefits of dry ice blasting. It offers a non-toxic, non-abrasive, and waste-free alternative to traditional surface cleaning methods.\n\nPlus, dry ice blasting is highly efficient, leading to significant savings on operating and maintenance costs. This makes it a incredibly cost-effective cleaning solution. Compare the key benefits and see why industries are making the switch.',
    comparison_table = []
  } = blok;
  
  // Default comparison data
  const defaultComparison = [
    {
      method: 'Dry Ice Blasting',
      abrasive: false,
      secondary_waste: false,
      sustainable: true,
      toxic: false,
      conductive: false
    }
  ];
  
  const comparisonData = comparison_table.length > 0 ? comparison_table : defaultComparison;

  return (
    <section className="why-choose-blasting">
      <div className="container container--xl">
        <div className="why-choose-blasting__header">
          <h5 className="why-choose-blasting__kicker">{kicker}</h5>
          <h2 className="why-choose-blasting__title">{title}</h2>
          <p className="why-choose-blasting__description">
            {description.split('\n\n').map((para, i) => (
              <React.Fragment key={i}>
                {para}
                {i < description.split('\n\n').length - 1 && <><br/><br/></>}
              </React.Fragment>
            ))}
          </p>
        </div>
        
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Cleaning Method</th>
                <th>Abrasive/ Surface Damage</th>
                <th>Secondary Waste</th>
                <th>Environmentally Sustainable</th>
                <th>Toxic</th>
                <th>Electrically Conductive</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td><strong>{row.method}</strong></td>
                  <td>
                    {row.abrasive ? (
                      '✗ Abrasive'
                    ) : (
                      <span className="check-mark">✓ Non-abrasive</span>
                    )}
                  </td>
                  <td>
                    {row.secondary_waste ? (
                      '✗ Creates Waste'
                    ) : (
                      <span className="check-mark">✓ No Secondary Waste</span>
                    )}
                  </td>
                  <td>
                    {row.sustainable ? (
                      <span className="check-mark">✓ Eco-friendly</span>
                    ) : (
                      '✗ Not Sustainable'
                    )}
                  </td>
                  <td>
                    {row.toxic ? (
                      '✗ Toxic'
                    ) : (
                      <span className="check-mark">✓ Non-toxic</span>
                    )}
                  </td>
                  <td>
                    {row.conductive ? (
                      '✗ Conductive'
                    ) : (
                      <span className="check-mark">✓ Non-conductive</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBlasting;