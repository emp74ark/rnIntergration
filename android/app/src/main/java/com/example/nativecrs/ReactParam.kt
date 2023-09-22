package com.example.nativecrs

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ReactParam (reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "ReactParam"

    @ReactMethod
    fun sendParam(name: String, value: String) {
        Log.d("ReactParam module", "send param $name with value $value")
    }
}