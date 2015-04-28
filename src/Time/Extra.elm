module Time.Extra where

import Task exposing (Task)

import Native.Time.Extra

now : Task error Float
now = Native.Time.Extra.getCurrentTime
