import React from 'react';
import {Link} from 'gatsby-plugin-react-i18next';
import './cta.css'

const Cta = (props) => {
  return (
    <Link className={`${props.size} cta ${props.color}`} to={props.linkTo}>
      {props.buttonText}
    </Link>
  );
};

export default Cta;