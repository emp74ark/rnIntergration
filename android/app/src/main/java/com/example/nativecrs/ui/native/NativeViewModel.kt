package com.example.nativecrs.ui.native

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class NativeViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is native component"
    }
    val text: LiveData<String> = _text
}