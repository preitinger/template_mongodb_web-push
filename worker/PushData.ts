import * as rt  from "runtypes"

export const PushData = rt.Record({
  example: rt.String,
})
export type PushData = rt.Static<typeof PushData>
