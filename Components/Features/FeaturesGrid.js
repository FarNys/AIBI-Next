import React from "react";
import SquareSvg from "../../Util/SquareSvg";
const FeaturesGrid = () => {
  return (
    <div className="features_grid_container">
      <div className="features_grid_box">
        <SquareSvg
          fillColorDark="#13bb70"
          fillColorLight="#13bb7077"
          posLeft={true}
        />
        <div className="features_grid_box_content">
          <h5>INTEGRATIONS</h5>
          <h1>Connect your preferred solutions</h1>
          <p>
            Strapi integrates with the best-in-class third-party providers.
            Choose your preferred stack for the best developer experience.
          </p>
        </div>
      </div>
      <div className="features_grid_grid_container">
        <div className="features_grid_grid_box">
          {/* SINGLE BOX ITEM STARTED */}

          <a className="features_grid_grid_card" href="#">
            <div className="features_grid_grid_card_back">
              <div className="animated-line">Get Package</div>
            </div>
            <div className="features_grid_grid_card_front">
              <img
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/cloudinary-logo_6e1f3b8bad.png"
                alt="Cloudinary"
              />
              <h3>Cloudinary</h3>
              <p>Cloudinary Provides Good</p>
            </div>
          </a>
          {/* SINGLE BOX ENDED */}
          {/* SINGLE BOX ITEM STARTED */}

          <a className="features_grid_grid_card" href="#">
            <div className="features_grid_grid_card_back">
              <div className="animated-line">Get Package</div>
            </div>
            <div className="features_grid_grid_card_front">
              <img
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/SendGrid-Logo_0375766527.png"
                alt="SendGrid"
              />
              <h3>SendGrid</h3>
              <p>Sendgrid provider for strapi email</p>
            </div>
          </a>
          {/* SINGLE BOX ENDED */}
          {/* SINGLE BOX ITEM STARTED */}

          <a className="features_grid_grid_card" href="#">
            <div className="features_grid_grid_card_back">
              <div className="animated-line">Get Package</div>
            </div>
            <div className="features_grid_grid_card_front">
              <img
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/algolia-blue-mark_954cfaaad8.svg"
                alt="Algolia"
              />
              <h3>Algolia</h3>
              <p>Algolia plugin for strapi</p>
            </div>
          </a>
          {/* SINGLE BOX ENDED */}
          {/* SINGLE BOX ITEM STARTED */}

          <a className="features_grid_grid_card" href="#">
            <div className="features_grid_grid_card_back">
              <div className="animated-line">Get Package</div>
            </div>
            <div className="features_grid_grid_card_front">
              <img
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/mailgun-logo_e6c700a257.png"
                alt="Mailgun"
              />
              <h3>Mailgun</h3>
              <p>Mailgun provider for strapi email plugin</p>
            </div>
          </a>
          {/* SINGLE BOX ENDED */}
          {/* SINGLE BOX ITEM STARTED */}

          <a className="features_grid_grid_card" href="#">
            <div className="features_grid_grid_card_back">
              <div className="animated-line">Get Package</div>
            </div>
            <div className="features_grid_grid_card_front">
              <img
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/redis-logo_bc7bd4e740.svg"
                alt="Redis"
              />
              <h3>Redis</h3>
              <p>
                Open-source, in-memory data structure store, used as database,
                cache and message broker
              </p>
            </div>
          </a>
          {/* SINGLE BOX ENDED */}
          {/* SINGLE BOX ITEM STARTED */}

          <a className="features_grid_grid_card" href="#">
            <div className="features_grid_grid_card_back">
              <div className="animated-line">Get Package</div>
            </div>
            <div className="features_grid_grid_card_front">
              <img
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/logo-sentry_110261e4dc.png"
                alt="Sentry"
              />
              <h3>Sentry</h3>
              <p>
                An oficcial Sentry plugin for strapi. sentry is an open-source
                erro tracking with full stacktraces.
              </p>
            </div>
          </a>
          {/* SINGLE BOX ENDED */}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
