import {
  FETCH_CYCLE_INFO_BEGIN,
  FETCH_CYCLE_INFO_SUCCESS,
  FETCH_CYCLE_INFO_FAILURE,
  CLEAR_CYCLE_INFO,
} from "../types";

import { StackingClient } from "@stacks/stacking";
import { StacksTestnet, StacksMainnet } from "@stacks/network";
import { address } from "lib/constant";

export const fetchCycleInfo = () => async (dispatch) => {
  dispatch(fetchCycleInfoBegin());

  const network = new StacksMainnet();
  const delegateeClient = new StackingClient(address, network);
  try {
    const poxInfo = await delegateeClient.getPoxInfo();
    const coreInfo = await delegateeClient.getCoreInfo();

    const currentCycle = poxInfo.reward_cycle_id;
    const currentBlockHeight = coreInfo.burn_block_height;
    const currentCycleStartedAt =
      2100 * currentCycle - 100 + poxInfo.first_burnchain_block_height;
    const currentCycleEndAt = currentCycleStartedAt + 2100;

    const currentCycleStatus = () => {
      if (
        currentBlockHeight >= currentCycleStartedAt &&
        currentBlockHeight <= currentCycleStartedAt + 100
      )
        return 1;
      if (
        currentBlockHeight >= currentCycleStartedAt + 100 &&
        currentBlockHeight <= currentCycleEndAt - 142
      )
        return 2;

      if (
        currentBlockHeight >= currentCycleEndAt - 142 &&
        currentBlockHeight < currentCycleEndAt
      )
        return 3;
      return 0;
    };

    const cycle3Info = { totalStackers: 10, totalStacked: 10000 };
    const cycle6Info = { totalStackers: 6, totalStacked: 12000 };

    dispatch(
      fetchCycleInfoSuccess({
        currentCycle,
        currentBlockHeight,
        currentCycleStartedAt,
        currentCycleEndAt,
        currentCycleStatus: currentCycleStatus(),
        cycle3Info,
        cycle6Info,
      })
    );
  } catch (error) {
    dispatch(fetchCycleInfoFailed());
  }
};

export const fetchCycleInfoBegin = () => ({
  type: FETCH_CYCLE_INFO_BEGIN,
});

export const fetchCycleInfoSuccess = (data) => ({
  type: FETCH_CYCLE_INFO_SUCCESS,
  payload: { data },
});

export const fetchCycleInfoFailed = () => ({
  type: FETCH_CYCLE_INFO_FAILURE,
});
