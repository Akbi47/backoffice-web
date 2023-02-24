import { createSelector } from "@reduxjs/toolkit"

export const loginSelector = (state) => state.login


export const loginResponse = createSelector(loginSelector,
  (loginAdmin) => {
    return loginAdmin.auth;
  })