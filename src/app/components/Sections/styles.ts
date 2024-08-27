import styled from "styled-components";
import { Box, Tabs, Tab, Stack, Input, Select, Button, Icon, Image, Grid, GridItem } from "@chakra-ui/react";

// Styled components for TrackSection
export const Container = styled(Box)`
  background: #573312;
  width: 100%;
  padding: 36px 36px 74px;
  display: flex;
  justify-content: center;
  font-family: 'Outfit';
`;

export const InnerBox = styled(Box)`
  background: rgba(255, 255, 255, 0.05);
  padding: 24px 58px;
  border-radius: lg;
  box-shadow: lg;
  width: 100%;
  max-width: 750px;
`;

export const CustomTabs = styled(Tabs)`
  margin-bottom: 8px;
`;

export const CustomTab = styled(Tab)`
  color: #8e8e8e;
  width: 189px;
  border-bottom: 1px solid #8e8e8e;

  &:focus {
    border: none;
    box-shadow: none;
  }

  &.selected {
    color: white;
    border-bottom: 1px solid #fff;
  }
`;

export const TabIcon = styled(Icon)`
  font-size: 1.2rem;
  margin-right: 5px;
`;

export const GridContainer = styled(Grid)`
  gap: 20px;
`;

export const InputBox = styled(Box)`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 13px 18px;
  border-radius: md;
  border: 1px solid #eee;
  background: rgba(255, 255, 255, 0.12);
  width: 100%;
  height: 50px;
`;

export const SelectBox = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: md;
  border: 1px solid #eee;
  background: rgba(255, 255, 255, 0.12);
  width: 100%;
  height: 50px;

  &:focus {
    border: none;
    box-shadow: none;
  }
`;

export const SwapImage = styled(Image)`
  border-radius: 50px;
  background: #ff8c1a;
  padding: 10px 12px;
`;

export const CustomButton = styled(Button)`
  color-scheme: orange;
  width: 100%;
  max-width: 100%;
  height: 50%;
`;
