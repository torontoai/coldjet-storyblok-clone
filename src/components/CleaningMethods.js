import React from 'react';
import './CleaningMethods.css';

const CleaningMethods = ({ blok }) => {
  return (
    <section className="section-background container bg-color--primary-darker margin-top--lg margin-bottom--lg padding-top--none padding-bottom--xl container--full-width">
      <section className="wysiwyg-content container text-component margin-top--lg margin-bottom--none padding-top--xl padding-bottom--none container--lg">
        <div style={{ position: 'relative', padding: '20px', textAlign: 'center' }}>
          <h5 style={{ 
            fontSize: '1.5rem', 
            fontFamily: '"Avenir Next Condensed", sans-serif', 
            color: '#aed049', 
            margin: '0 0 9.504px', 
            lineHeight: '2' 
          }}>
            <strong>Why Choose <strong>Dry Ice Blasting</strong>?</strong>
          </h5>
          <h4 className="text--xxl balance-text" style={{ color: 'white' }}>
            A <strong>Cleaner</strong>, <strong>Faster</strong>, and More <strong>Sustainable</strong> Approach to Industrial Cleaning
          </h4>
          <p className="text--md color--white balance-text">
            Discover the benefits of dry ice blasting. It offers a <strong>non-toxic, non-abrasive, and waste-free</strong> alternative to traditional surface cleaning methods.
          </p>
          <p className="text--md color--white balance-text">
            Plus, dry ice blasting is highly efficient, leading to <strong>significant savings on operating and maintenance costs</strong>. This makes it a <strong>incredibly cost-effective</strong> cleaning solution. Compare the key benefits and see why industries are making the switch.
          </p>
        </div>
      </section>
      
      <section className="wysiwyg-content container text-component margin-top--xxxs margin-bottom--none padding-top--xxs padding-bottom--none container--md">
        <p className="color--text color--secondary-dark">
          <div className="table">
            <div className="table__inner">
              <table className="table__element">
                <thead className="thead table__header">
                  <tr className="tr table__header-row">
                    <th className="th table__cell--left" scope="col">Cleaning Method</th>
                    <th className="th table__cell--center-x" scope="col">Abrasive/ Surface Damage</th>
                    <th className="th table__cell--center-x" scope="col">Secondary Waste</th>
                    <th className="th table__cell--center-x" scope="col">Environmentally Sustainable</th>
                    <th className="th table__cell--center-x" scope="col">Toxic</th>
                    <th className="th table__cell--center-x" scope="col">Electrically Conductive</th>
                  </tr>
                </thead>
                <tbody className="tbody table__body">
                  <tr className="tr">
                    <td className="td table__cell--left">Dry Ice Blasting</td>
                    <td className="td table__cell--center-x text--positive">✅ Non-abrasive</td>
                    <td className="td table__cell--center-x text--positive">✅ No Secondary Waste</td>
                    <td className="td table__cell--center-x text--positive">✅ Eco-friendly</td>
                    <td className="td table__cell--center-x text--positive">✅ Non-toxic</td>
                    <td className="td table__cell--center-x text--positive">✅ Non-conductive</td>
                  </tr>
                  <tr className="tr">
                    <td className="td table__cell--left">Abrasive Blasting</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Abrasive</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Produces Waste</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Not Sustainable</td>
                    <td className="td table__cell--center-x text--neutral">*</td>
                    <td className="td table__cell--center-x text--neutral">✅ Non-conductive</td>
                  </tr>
                  <tr className="tr">
                    <td className="td table__cell--left">Soda Blasting</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Abrasive</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Produces Waste</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Not Sustainable</td>
                    <td className="td table__cell--center-x text--neutral">*</td>
                    <td className="td table__cell--center-x text--neutral">✅ Non-conductive</td>
                  </tr>
                  <tr className="tr">
                    <td className="td table__cell--left">Pressure Washing</td>
                    <td className="td table__cell--center-x text--neutral">✅ Non-abrasive</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Produces Waste</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Not Sustainable</td>
                    <td className="td table__cell--center-x text--neutral">*</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Conductive</td>
                  </tr>
                  <tr className="tr">
                    <td className="td table__cell--left">Solvents/Chemicals</td>
                    <td className="td table__cell--center-x text--neutral">✅ Non-abrasive</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Produces Waste</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Not Sustainable</td>
                    <td className="td table__cell--center-x text--neutral">⚠️ Toxic</td>
                    <td className="td table__cell--center-x text--neutral">N/A</td>
                  </tr>
                  <tr className="tr">
                    <td className="td table__cell--left">Hand Tools</td>
                    <td className="td table__cell--center-x text--neutral">⚠️Abrasive</td>
                    <td className="td table__cell--center-x text--neutral">✅ No Secondary Waste</td>
                    <td className="td table__cell--center-x text--neutral">N/A</td>
                    <td className="td table__cell--center-x text--neutral">N/A</td>
                    <td className="td table__cell--center-x text--neutral">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </p>
      </section>
      
      <section className="wysiwyg-content container text-component margin-top--none margin-bottom--xl padding-top--none padding-bottom--xl container--sm">
        <p style={{ textAlign: 'center' }}>
          <span className="s1 text--sm color--primary-light color--gray">
            * Upon contact with hazardous substances and objects, traditional blasting materials become unusable for further cleaning. Authorities classify these blasting materials as toxic waste. As a result, they require safe disposal.
          </span>
        </p>
      </section>
    </section>
  );
};

export default CleaningMethods;