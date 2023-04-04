export const RANGE_MODIFY = 'RANGE_MODIFY';

export const rangeModify = (value) => ({
    type: RANGE_MODIFY,
    payload: value
});