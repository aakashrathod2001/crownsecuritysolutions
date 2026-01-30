import React from 'react';
import styles from './MapSection.module.scss';

const MapSection: React.FC = () => {
  return (
    <div className={styles.mapContainer}>
      <h4 className={styles.heading}>Our Offices</h4>
      
      <div className={styles.officeGrid}>
        <div className={styles.officeCard}>
          <h5 className={styles.officeTitle}>Thane Office</h5>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.666970005158!2d72.9706893749745!3d19.24141498118155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6380907500f%3A0x3066e58817c29529!2sRustomjee%20Urbania%2C%20Majiwada%2C%20Thane%2C%20Maharashtra%20400601!5e0!3m2!1sen!2sin!4v1738245678901!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crown Security Solutions Thane Office"
            />
          </div>
          <p className={styles.officeAddress}>
            Office 11, P3 Level, Azziano, Rustomjee Urbania, Majiwada, Thane (W), Maharashtra 400601
          </p>
        </div>

        <div className={styles.officeCard}>
          <h5 className={styles.officeTitle}>Mumbai Office</h5>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.388993933357!2d72.8713689749745!3d19.07598398118155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97f346053b7%3A0x619300705ca208%20!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1738245678901!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crown Security Solutions Mumbai Office"
            />
          </div>
          <p className={styles.officeAddress}>
            Mumbai, Maharashtra
          </p>
        </div>
      </div>

      <p className={styles.mapText}>
        Visit us at either of our offices or contact us for more information.
      </p>
    </div>
  );
};

export default MapSection;
