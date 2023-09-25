package com.example.nativecrs

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

var savedParam: String = "start"

class ReactParam (reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "ReactParam"

    @ReactMethod
    fun setParam(value: String, callback: Callback) {
        savedParam = value
        callback.invoke(value)

    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getParam(): String {
        return savedParam
    }
}
