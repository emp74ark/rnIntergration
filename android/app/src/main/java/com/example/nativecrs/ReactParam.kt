package com.example.nativecrs

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

var savedParam: String = "start"

class ReactParam (reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "ReactParam"

    // var savedParam: String = "start"

    @ReactMethod
    fun sendParam(name: String, value: String) {
        Log.d("ReactParam module", "send param $name with value $value")
    }

    @ReactMethod
    fun setParam(value: String) {
        savedParam = value
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getParam(): String {
        return savedParam
    }
}
