import { FC, useEffect, useState } from "react";
import Navbar from "../common/navbar/Navbar";
import {
  FixedPanelWrapper,
  FloatingSettingsLayout,
  FloatingSettingsWrapper,
  MainViewWrapper,
} from "./styles";

const Agrograph: FC = () => {
  const [isSettingsVisibilityToggled, setSettingsVisibility] = useState(false);

  useEffect(() => {
    setSettingsVisibility(true);
  }, []);

  return (
    <div
      className="Iphone14DashboardPage"
      style={{
        width: "100%",
        background: "#EEEEEE",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        display: "flex",
      }}
    >
      <Navbar />

      <MainViewWrapper>
        <FixedPanelWrapper
          isVisible={!isSettingsVisibilityToggled}
        ></FixedPanelWrapper>

        <FloatingSettingsWrapper isVissible={isSettingsVisibilityToggled}>
          <FloatingSettingsLayout>
            <div
              className="OptionsBar"
              style={{
                alignSelf: "stretch",
                padding: 4,
                background: "white",
                boxShadow: "2px 2px 12px rgba(87.13, 87.13, 87.13, 0.50)",
                borderRadius: 2,
                overflow: "hidden",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                className="Selectors"
                style={{
                  paddingLeft: 4,
                  paddingRight: 4,
                  background: "#50B7B2",
                  borderRadius: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  display: "flex",
                }}
              >
                <div
                  className="Label"
                  style={{
                    textAlign: "center",
                    color: "#575757",
                    fontSize: 10,
                    fontFamily: "Noto Sans",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Variantes
                </div>
                <div
                  className="TablerIconPlant2"
                  style={{
                    width: 12,
                    height: 12,
                    paddingTop: 1.75,
                    paddingBottom: 2.25,
                    paddingLeft: 0.75,
                    paddingRight: 0.75,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="VectorStroke"
                    style={{
                      width: 10.5,
                      height: 8,
                      background: "rgba(255, 255, 255, 0.40)",
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="Selectors"
                style={{
                  paddingLeft: 4,
                  paddingRight: 4,
                  background: "#50B7B2",
                  borderRadius: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  display: "flex",
                }}
              >
                <div
                  className="Label"
                  style={{
                    textAlign: "center",
                    color: "#575757",
                    fontSize: 10,
                    fontFamily: "Noto Sans",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Variantes Geneticas
                </div>
                <div
                  className="TablerIconAffiliateFilled"
                  style={{
                    width: 12,
                    height: 12,
                    padding: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 9,
                      height: 9,
                      background: "rgba(255, 255, 255, 0.40)",
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="Selectors"
                style={{
                  paddingLeft: 4,
                  paddingRight: 4,
                  background: "#50B7B2",
                  borderRadius: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  display: "flex",
                }}
              >
                <div
                  className="Label"
                  style={{
                    textAlign: "center",
                    color: "#575757",
                    fontSize: 10,
                    fontFamily: "Noto Sans",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Grupos de madurez
                </div>
                <div
                  className="TablerIconAlignBoxBottomCenterFilled"
                  style={{
                    width: 12,
                    height: 12,
                    padding: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 10,
                      height: 10,
                      background: "rgba(255, 255, 255, 0.40)",
                    }}
                  ></div>
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
          </FloatingSettingsLayout>
        </FloatingSettingsWrapper>
      </MainViewWrapper>
    </div>
  );
};

export default Agrograph;
