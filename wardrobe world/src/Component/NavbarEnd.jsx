import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { BsEarbuds, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./NavbarEnd.css";

function NavbarEnd() {
  let arr = [
    "Use code FIRST 10 for 10% off selected full-price items",
    "Get 10% off your first order when you spend over €600",
    "New to sale: ski and cold-weather essentials",
  ];

  let [index, setIndex] = useState(0);

  let [text, setText] = useState(arr[index]);

  function changeText() {
    setInterval(() => {
      setText(arr[index]);
      setIndex((index + 1) % arr.length);
    }, 10000);
  }
  useEffect(() => {
    changeText();
  }, [index]);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  return (
    <div
      style={{
        //  make it fixed at top when scroll down and make it sticky
        position: "sticky",
        top: "0",
        zIndex: "2",
      }}
    >
      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #e2e8f0",
          backgroundColor: "rgb(255, 255, 255)",
          marginBottom: "1px",
          marginTop: "1rem",
        }}
      >
        <div className="hover">
          <div
            className="menu"
            onMouseEnter={() => setIsOpen1(true)}
            onMouseLeave={() => setIsOpen1(false)}
          >
            <NavLink to="/product">
              <h1 className="hover1"> NEW ARRIVALS</h1>
            </NavLink>
          </div>
          {isOpen1 && (
            <div
              onMouseEnter={() => setIsOpen1(true)}
              onMouseLeave={() => setIsOpen1(false)}
              style={{
                position: "absolute",
                background: "white",
                width: "auto",
                display: "flex",
                gap: "2rem",
                top: "4.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: ".5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                zIndex: "100",
              }}
            >
              <div>
                <div className="menulist">
                  <strong className="item">SHOP BY CATEGORY</strong>
                </div>
                <div>
                  <div className="menu-item">Current Week</div>
                  <div className="menu-item">Previous Weeks</div>
                  <div className="menu-item">Essentials</div>
                  <div className="menu-item">Bhagalpuri Silk</div>
                  <div className="menu-item">Tailorjng Edit</div>
                  <div className="menu-item">Gifting</div>
                  <div className="menu-item">Outdoor & Activewear</div>
                  <div className="menu-item">Cold Weather Edit</div>
                  <div className="menu-item">The Ski Edit</div>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <strong className="item">JUST IN</strong>
                </div>
                <div>
                  <div className="menu-item">Clothing</div>
                  <div className="menu-item">Shoes</div>
                  <div className="menu-item">Beags</div>
                  <div className="menu-item">Accessories</div>
                </div>
              </div>

              <div>
                <div className="menu-item"></div>
                <img
                  src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW07/NA_FLYOUT-_9__20230216110117.jpg"
                  alt="c"
                  style={{ width: "25rem" }}
                />
              </div>
            </div>
          )}
          {/* second */}
          <div
            className="menu"
            onMouseEnter={() => setIsOpen2(true)}
            onMouseLeave={() => setIsOpen2(false)}
          >
            <h1 className="hover1"> DESIGNERS</h1>
          </div>
          {isOpen2 && (
            <div
              onMouseEnter={() => setIsOpen2(true)}
              onMouseLeave={() => setIsOpen2(false)}
              style={{
                position: "absolute",
                background: "white",
                width: "auto",
                display: "flex",
                gap: "2rem",
                top: "4.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "1.5rem",
                zIndex: "100",
              }}
            >
              <div>
                <div className="menulist">
                  <strong className="item">TOP 20</strong>
                </div>
                <div>
                  <div className="menu-item">Acne Studios</div>

                  <div className="menu-item">Ami Paris</div>
                  <div className="menu-item">Amiri</div>
                  <div className="menu-item">Balenciaga</div>
                  <div className="menu-item">Bottega Veneta</div>
                  <div className="menu-item">Burberry</div>
                  <div className="menu-item">Christian Louboutin</div>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <strong className="item"></strong>
                  <br />
                </div>
                <div>
                  <div className="menu-item">Gucci</div>
                  <div className="menu-item">Loewe</div>
                  <div className="menu-item">Loro Piana</div>
                  <div className="menu-item">Maison Margiela</div>
                  <div className="menu-item">Moncler</div>
                  <div className="menu-item">Tom Ford</div>
                  <div className="menu-item">Thom Browne</div>
                </div>
              </div>

              <div>
                <div className="menu-item"></div>
                <img
                  src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW08/FLYOUTS/FLYOUT1_20230221094353.jpg"
                  alt="c"
                  style={{ width: "25rem" }}
                />
              </div>
            </div>
          )}

          {/* thied */}
          <div
            className="menu"
            onMouseEnter={() => setIsOpen3(true)}
            onMouseLeave={() => setIsOpen3(false)}
          >
            <h1 className="hover1"> CLOTHING</h1>
          </div>
          {isOpen3 && (
            <div
              onMouseEnter={() => setIsOpen3(true)}
              onMouseLeave={() => setIsOpen3(false)}
              style={{
                position: "absolute",
                background: "white",
                width: "auto",
                display: "flex",
                gap: "2rem",
                top: "4.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "1rem",
                zIndex: "100",
              }}
            >
              <div>
                <div className="menulist">
                  <strong className="item">SHOP BY CATEGORY</strong>
                </div>
                <div>
                  <div className="menu-item">Jackets</div>

                  <div className="menu-item">Knitwear</div>
                  <div className="menu-item">Coats</div>
                  <div className="menu-item">Sweats</div>
                  <div className="menu-item">Shirts</div>
                  <div className="menu-item">pants</div>
                  <div className="menu-item">Tailoring</div>
                  <div className="menu-item">Jeans</div>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <strong className="item">TOP BRANDS</strong>
                </div>
                <div>
                  <div className="menu-item">Acne Studios</div>
                  <div className="menu-item">Georgette</div>

                  <div className="menu-item">Ami Paris</div>
                  <div className="menu-item">Balenciaga</div>
                  <div className="menu-item">Brunello Cucinelli</div>
                  <div className="menu-item">Burberry</div>
                  <div className="menu-item">Gucci</div>
                </div>
              </div>

              <div>
                <div className="menu-item">
                  <strong className="item">DISCOVER</strong>
                </div>
                <div>
                  <div className="menu-item">New clothing arrivals</div>
                  <div className="menu-item">Essential clothing</div>
                  <div className="menu-item">Exclusive clothing</div>
                </div>
              </div>
              <div>
                <div className="menu-item"></div>
                <img
                  src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW08/FLYOUTS/FLYOUT2_20230221094352.jpg"
                  alt="c"
                  style={{ width: "25rem" }}
                />
              </div>
            </div>
          )}

          {/* fourth */}
          <div
            className="menu"
            onMouseEnter={() => setIsOpen4(true)}
            onMouseLeave={() => setIsOpen4(false)}
          >
            <h1 className="hover1"> SHOES</h1>
          </div>
          {isOpen4 && (
            <div
              onMouseEnter={() => setIsOpen4(true)}
              onMouseLeave={() => setIsOpen4(false)}
              style={{
                position: "absolute",
                background: "white",
                width: "auto",
                display: "flex",
                gap: "2rem",
                top: "4.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "1.5rem",
                zIndex: "100",
              }}
            >
              <div>
                <div className="menulist">
                  <strong className="item">SHOP BY CATEGORY</strong>
                </div>
                <div>
                  <div className="menu-item">Sneakers</div>

                  <div className="menu-item">Boots</div>
                  <div className="menu-item">Loafers</div>
                  <div className="menu-item">Formal shoes</div>
                  <div className="menu-item">Derby Shoes</div>
                  <div className="menu-item">Slippers</div>
                  <div className="menu-item">Espadrilles</div>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <strong className="item">TOP BRANDS</strong>
                </div>
                <div>
                  <div className="menu-item"> Amiri</div>
                  <div className="menu-item">Balenciaga</div>
                  <div className="menu-item">Brunello Cucinelli</div>
                  <div className="menu-item">Christian Louboutin</div>
                  <div className="menu-item">Gucci</div>
                  <div className="menu-item">New Balance</div>
                  <div className="menu-item">Tom Ford</div>
                </div>
              </div>

              <div>
                <div className="menu-item">
                  <strong className="item">DISCOVER</strong>
                </div>
                <div>
                  <div className="menu-item">New shoe arrivals</div>
                  <div className="menu-item">Essential shoes</div>

                  <div className="menu-item">Exclusive shoes</div>
                </div>
              </div>
              <div>
                <div className="menu-item"></div>
                <img
                  src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW08/FLYOUTS/FLYOUT3_20230221094352.jpg"
                  alt="c"
                  style={{ width: "25rem" }}
                />
              </div>
            </div>
          )}
          {/* fifth */}
          <div
            className="menu"
            onMouseEnter={() => setIsOpen5(true)}
            onMouseLeave={() => setIsOpen5(false)}
          >
            <h1 className="hover1"> BAGS</h1>
          </div>
          {isOpen5 && (
            <div
              onMouseEnter={() => setIsOpen5(true)}
              onMouseLeave={() => setIsOpen5(false)}
              style={{
                position: "absolute",
                background: "white",
                width: "auto",
                display: "flex",
                gap: "2rem",
                top: "4.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "1.5rem",
                zIndex: "100",
              }}
            >
              <div>
                <div className="menulist">
                  <strong className="item">SHOP BY CATEGORY</strong>
                </div>
                <div>
                  <div className="menu-item">Crossbody bags</div>

                  <div className="menu-item">Totes</div>
                  <div className="menu-item">Travel bags</div>
                  <div className="menu-item">Backpacks</div>
                  <div className="menu-item">Belt bags</div>
                  <div className="menu-item">Pouches</div>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <strong className="item">TOP BRANDS</strong>
                </div>
                <div>
                  <div className="menu-item">Acne Studios</div>
                  <div className="menu-item">Balenciaga</div>
                  <div className="menu-item">Gucci</div>
                  <div className="menu-item">Lemaire</div>
                  <div className="menu-item">Loewe</div>
                </div>
              </div>

              <div></div>
              <div>
                <div className="menu-item">
                  <strong className="item">DISCOVER</strong>
                </div>
                <div>
                  <div className="menu-item">New bag arrivals</div>
                  <div className="menu-item">New bag arrivals</div>
                  <div className="menu-item">New bag arrivals</div>
                </div>
              </div>
              <div>
                <div className="menu-item"></div>
                <img
                  src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW08/FLYOUTS/FLYOUT5_20230221094351.jpg"
                  alt="c"
                  style={{ width: "25rem" }}
                />
              </div>
            </div>
          )}
          {/* six */}
          <div
            className="menu"
            onMouseEnter={() => setIsOpen6(true)}
            onMouseLeave={() => setIsOpen6(false)}
          >
            <NavLink to="/product">
              <h1 className="hover1"> ACCESSORIES</h1>
            </NavLink>
          </div>
          {isOpen6 && (
            <div
              onMouseEnter={() => setIsOpen6(true)}
              onMouseLeave={() => setIsOpen6(false)}
              style={{
                position: "absolute",
                background: "white",
                width: "auto",
                display: "flex",
                gap: "2rem",
                top: "4.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "1.5rem",
                zIndex: "100",
              }}
            >
              <div>
                <div className="menulist">
                  <strong className="item">SHOP BY CATEGORY</strong>
                </div>
                <div>
                  <div className="menu-item">Crossbody bags</div>

                  <div className="menu-item">Totes</div>
                  <div className="menu-item">Travel bags</div>
                  <div className="menu-item">Backpacks</div>
                  <div className="menu-item">Belt bags</div>
                  <div className="menu-item">Pouches</div>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <strong className="item">TOP BRANDS</strong>
                </div>
                <div>
                  <div className="menu-item">Acne Studios</div>
                  <div className="menu-item">Balenciaga</div>
                  <div className="menu-item">Gucci</div>
                  <div className="menu-item">Lemaire</div>
                  <div className="menu-item">Loewe</div>
                </div>
              </div>

              <div></div>
              <div>
                <div className="menu-item">
                  <strong className="item">DISCOVER</strong>
                </div>
                <div>
                  <div className="menu-item">New bag arrivals</div>
                  <div className="menu-item">Essential bags</div>
                  <div className="menu-item">Exclusive bags</div>
                </div>
              </div>
              <div>
                <div className="menu-item"></div>
                <img
                  src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW08/FLYOUTS/FLYOUT6_20230221094353.jpg"
                  alt="c"
                  style={{ width: "25rem" }}
                />
              </div>
            </div>
          )}
          {/* seven */}
          <div
            className="menu"
            onMouseEnter={() => setIsOpen7(true)}
            onMouseLeave={() => setIsOpen7(false)}
          >
            <h1 className="hover1"> NEW SEASON</h1>
          </div>
          {isOpen7 && (
            <div
              onMouseEnter={() => setIsOpen7(true)}
              onMouseLeave={() => setIsOpen7(false)}
              style={{
                position: "absolute",
                background: "white",
                width: "auto",
                display: "flex",
                gap: "2rem",
                top: "4.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "1.5rem",
                zIndex: "100",
              }}
            >
              <div>
                <div className="menulist">
                  <strong className="item">HOP BY CATEGORY</strong>
                </div>
                <div>
                  <div className="menu-item">Clothing</div>

                  <div className="menu-item">shoes</div>
                  <div className="menu-item">Bags</div>
                  <div className="menu-item">Accessories</div>
                </div>
              </div>
              <div>
                <div className="menu-item"></div>
                <img
                  src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW06/FLYOUT/MW_FLYOUT_2_2X_20230206154927.jpg"
                  alt="c"
                  style={{ width: "30rem" }}
                />
              </div>
            </div>
          )}
          {/* eight */}
          <div
            className="menu"
            onMouseEnter={() => setIsOpen8(true)}
            onMouseLeave={() => setIsOpen8(false)}
          >
            <h1 className="hover1"> SALE</h1>
          </div>
          {isOpen8 && (
            <div
              onMouseEnter={() => setIsOpen8(true)}
              onMouseLeave={() => setIsOpen8(false)}
              style={{
                position: "absolute",
                background: "white",
                width: "auto",
                display: "flex",
                gap: "2rem",
                top: "4.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "1.5rem",
                zIndex: "100",
              }}
            >
              <div>
                <div className="menulist">
                  <strong className="item">SHOP BY CATEGORY</strong>
                </div>
                <div>
                  <div className="menu-item">Clothing</div>

                  <div className="menu-item">snoes</div>
                  <div className="menu-item">Bags</div>
                  <div className="menu-item">Accessories</div>
                  <div className="menu-item">Ski wear</div>
                </div>
              </div>

              <div>
                <div className="menu-item"></div>
                <img
                  src="https://img.mytheresa.com/media/static/raw/cms/l/2018_CW22_Flyouts/sale_flyout_2x_20180525164548.jpg"
                  alt="c"
                  style={{ width: "40rem" }}
                />
              </div>
            </div>
          )}
          {/* nine */}
        </div>

        <div
          style={{
            marginRight: "8rem",
            width: "16rem",
            display: "flex",
            alignItems: "center",
            border: "3px solid grey",
            borderRadius: ".3rem",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Search for products"
            style={{
              height: "2.2rem",
              border: "none",
              outline: "none",
              paddingLeft: ".6rem",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          />
          <BsSearch
            style={{
              fontSize: ".8rem",
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "-.1rem",
          padding: "1rem",
          textAlign: "center",
          color: "darkred",
          fontWeight: "bold",
          fontSize: "1rem",
          fontFamily: "sans-serif",
          backgroundColor: "rgb(254, 252, 251)",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default NavbarEnd;
