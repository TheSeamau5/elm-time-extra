module Time.Extra where
{-| Extra time functions

@docs now

-}

import Task exposing (Task)
import Time exposing (Time)

import Native.Time.Extra

{-| Task that returns the current time
-}
now : Task error Float
now = Native.Time.Extra.getCurrentTime
