import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Spinner from '../common/Spinner';
import './Section503.scss';

const Section503 = () => {
  const DELAY: number = 4000;
  const [isCard503Visible, setIsCard503Visible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCard503Visible(true);
    }, DELAY);
  }, []);

  return (
    <section className="error">
      {isCard503Visible ? (
        <Card>
          <Card.Header>
            503 <span className="normal">Service Unavailable</span>
          </Card.Header>
          <Card.Body>
            <p>Ups! The sevrer is not running. Please run the server.</p>
            <code>npm run server</code>
          </Card.Body>
        </Card>
      ) : (
        <Spinner />
      )}
    </section>
  );
};
export default Section503;
