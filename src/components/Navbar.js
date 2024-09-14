import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFkElEQVR4Xu2cTWhUVxTH73vz8jHRoNhmU8iq2HyopMUOfrTVkkmimSZWFIRASpVuBFeKFvdddeXOvQgVaRBdOBNtRhfiR5sShAjJBFcWF7oRIqg0k3meN5k4c+7czHsz5r3zPs7AkDj3+U7e/3fP17030QS/SBXQSK2zccEAiCcBA2AAxAoQm2cPYADEChCbZw9gAMQKEJtnD2AA66fA0JU3ncv5/AVTmENw13Z8Z1NhSPGZ5vA6UXXda6GZWbMgzt/9qSPn9KlC4wGW+Pml/GNoLbeIanFAD4fCNg5g1cYrI6b33R775D8nEEIDIHl5cQIkPrry0A7FVl338QDAvvbnnfFPj0UKQP/lxcVy2KEGIBbvjHdsihqACtXJAQgA4Ci6OLrICUnqa8ADGAAlBAZAqT7YjjSA+IkrnYapX4ASsFR/K2KwKiyvVa2YJtwK/gN8td7oeyi0Bbw1cxne8H2h8ForLGX7Dv9yuDwHIpQDiuIL/TE8PNTfqy8vAQCIQl4AgAofjBCA9uNXJ2CKlupv/wKYm/wHBcmegwnUL8xN/ovHh3cioHOZGWn8q5qdtWdVUPuJqxX1t38BzGceIcG6h3chAPMZDKg7ZQEqP898GgPqTlUCqn5uLwE4izeu5QBnISiXeYAAdA3vQQByEqCulAWoLGwujQF1IUAMwDYHLKTvIQBfpL5FABbS9/H4D3sRgIWbD6Xx3b4JQYHwAMfrQ+uyFiS864QhBzAARfXnmxyQSA4gV52emkKunRgYlMZvo9r/66FhND6TviH1Ac5yQGQ9IJGUBf5LAmD1buXX9NQtCUBKAnCdAVQqYheCEv0HsMBZELjCZRPJg9J4BgMYHMEAMtcaAhDmPqBmDkj04xAynQWBEQA8w6ezNyUAhyQAEw0B4D6A+wBF2Qp7Z8pP6/jQLgQpCgTkAdWmFAtwlQtzVYtxzpIw9wHEHhDZKsgvHhBZANwH1I7nrucA7gOoAXAfUJOA+x7AfYC7ADaOX1r/xTgoO9V7wlA3r1GG7hj5GZe3GswteGu6LrRYk1iYxBsyodkP8C0Aad49nfobYDR9+DQ0+wEbjl10wQOsDlF1KkLhAdYJCdiU7z0wJjV4pdlvNAsd3lYZqukxoTe31m4Eg7Yf4F8AZZ01TRex1jagB+HIgDMcRktpcF2Ppxchr7482Q+Y/XF7511j67Nd5nPRJv6vYwHD/UvfxeIit3mbuPb5mHgR/wzSgSZi8ZVfGdBb4vBvHQn24ScKigdY4ouYIZ0Hcl/Yei28adogftv5u3jVsgXCT7wYjspeEGAPmD3SB+vCmnQeqF55vLl+pmO3OPdyXzEHaEbc8gHRO4I35QN3Lmj2yJeK80DeCFqvlbcQjkaXThXLUh08wkrxPaP7UQgK3LkgAKBc36xXHK+uHyycWYn/zRuLX7tH+xGAwJ0LChqAoeXTJQCWBwjRdcg6LFCeQ4E7FxQ0ACf3/1EU3mhb+c2hWKsFItBJOFghiAF4FezXsMMAGIBSgYaXo+1ywPbvvkEGn9zDh1/dHpefNmn+iqqg3pF9KAcEsQ+oWYa6LbDd/WUAA4WzCEDP6PcIQOj6ADuB3B6XAUSuD3BbYLv7ywC4D+Ak7G0SJta7yjyXocREGAAD8DYE2SVJt8e5D/BZI8Z9AHEnzH0AMQDuAzgJe5uEifXmPoABuPw34+yWoxkAMQC363y7+3MfwH2Ao80uRxepwoldCLKboW6P836AzzyA+wDirMyroQyAGzFLAT4ZR+QJkQtBblc5dvfnPsBnVRDvBxAvR/N+ADEA7gOIku+q2cglYWK9eT+AARAvRzMABoDmAOcAYpcIHQBiPUNjvuENmdAoQPwgDIABECtAbJ49gAEQK0Bsnj2AARArQGyePYABECtAbP49AQIoygy4QWkAAAAASUVORK5CYII="
          alt="Logo"
          className="navbar-logo"
        />
        <h1 className="navbar-title">Hounter</h1>
      </div>
      <div className="navbar-right">
        {/* Link to Favorites with a red heart */}
        <Link to="/favorites" className="navbar-button favorites-link">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <button className="navbar-button">Request House</button>
      </div>
    </nav>
  );
}

export default Navbar;
