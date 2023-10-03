import { FC, useEffect, useState } from "react";
import Navbar from "../common/navbar/Navbar";
import {
  AgroGraphLayout,
  AgroGraphWrapper,
  FixedDashboardLayout,
  FixedDashboardWrapper,
  FloatingDashboardWrapper,
} from "./styles";

const Agrograph: FC = () => {
  const [isSettingsVisibilityToggled, setSettingsVisibility] = useState(false);

  useEffect(() => {
    setSettingsVisibility(true);
  }, []);

  return (
    <AgroGraphWrapper>
      <AgroGraphLayout>
        <Navbar />
        {isSettingsVisibilityToggled ? (
          <FloatingDashboardWrapper>
            <div
              className="OptionsBar"
              style={{
                alignSelf: "stretch",
                height: 88,
                padding: 4,
                background: "white",
                boxShadow: "2px 2px 12px rgba(87.13, 87.13, 87.13, 0.50)",
                borderRadius: 2,
                overflow: "hidden",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                className="Selectors"
                style={{
                  paddingLeft: 4,
                  paddingRight: 4,
                  borderRadius: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                <div
                  className="TablerIconPlant2"
                  style={{ width: 12, height: 12, position: "relative" }}
                >
                  <div
                    className="VectorStroke"
                    style={{
                      width: 10.5,
                      height: 8,
                      left: 0.75,
                      top: 1.75,
                      position: "absolute",
                      background: "#039BE5",
                    }}
                  ></div>
                </div>
                <div
                  className="Label"
                  style={{
                    textAlign: "center",
                    color: "#575757",
                    fontSize: 12,
                    fontFamily: "Noto Sans",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Variantes
                </div>
              </div>
              <div
                className="Separator1"
                style={{
                  alignSelf: "stretch",
                  height: 0,
                  border: "0.88px #8BC1C3 solid",
                }}
              ></div>
              <div
                className="Selectors"
                style={{
                  paddingLeft: 4,
                  paddingRight: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                <div
                  className="TablerIconAffiliateFilled"
                  style={{ width: 12, height: 12, position: "relative" }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 9,
                      height: 9,
                      left: 1.5,
                      top: 1.5,
                      position: "absolute",
                      background: "#039BE5",
                    }}
                  ></div>
                </div>
                <div
                  className="Label"
                  style={{
                    textAlign: "center",
                    color: "#575757",
                    fontSize: 12,
                    fontFamily: "Noto Sans",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Variantes Geneticas
                </div>
              </div>
              <div
                className="Separator2"
                style={{
                  alignSelf: "stretch",
                  height: 0,
                  border: "0.88px #8BC1C3 solid",
                }}
              ></div>
              <div
                className="Selectors"
                style={{
                  paddingLeft: 4,
                  paddingRight: 4,
                  borderRadius: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                <div
                  className="TablerIconAlignBoxBottomCenterFilled"
                  style={{ width: 12, height: 12, position: "relative" }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 10,
                      height: 10,
                      left: 1,
                      top: 1,
                      position: "absolute",
                      background: "#039BE5",
                    }}
                  ></div>
                </div>
                <div
                  className="Label"
                  style={{
                    textAlign: "center",
                    color: "#575757",
                    fontSize: 12,
                    fontFamily: "Noto Sans",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Grupos de madurez
                </div>
              </div>
            </div>
            <div
              className="Container"
              style={{
                alignSelf: "stretch",
                flex: "1 1 0",
                background: "white",
                boxShadow: "2px 2px 12px rgba(87.13, 87.13, 87.13, 0.50)",
                borderRadius: 2,
              }}
            />
          </FloatingDashboardWrapper>
        ) : (
          <FixedDashboardWrapper>
            <FixedDashboardLayout>
              Aqui iria la vista para los resultados de la busqueda.
            </FixedDashboardLayout>
          </FixedDashboardWrapper>
        )}
      </AgroGraphLayout>
    </AgroGraphWrapper>
  );
};

export default Agrograph;
