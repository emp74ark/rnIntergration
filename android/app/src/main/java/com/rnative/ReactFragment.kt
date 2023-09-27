package com.rnative

import android.content.Context
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.facebook.hermes.reactexecutor.HermesExecutorFactory
import com.facebook.react.PackageList
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.common.LifecycleState
import com.facebook.react.shell.MainReactPackage


abstract class ReactFragment : Fragment() {
    private lateinit var reactRootView: ReactRootView
    private lateinit var reactInstanceManager: ReactInstanceManager

    abstract fun getModuleName(): String

    override fun onDetach() {
        super.onDetach()
        reactRootView?.unmountReactApplication();
    }

    override fun onAttach(context: Context) {
        super.onAttach(context)
        val packages = PackageList(activity?.application).packages

        reactInstanceManager = ReactInstanceManager.builder()
            .setApplication(activity?.application)
            .setCurrentActivity(activity)
            .setBundleAssetName("index.android.bundle")
            .setJSMainModulePath("index")
            .setJavaScriptExecutorFactory(HermesExecutorFactory())
            .addPackages(packages)
            .addPackage(RnAppPackage())
            .setUseDeveloperSupport(BuildConfig.DEBUG)
            .setInitialLifecycleState(LifecycleState.BEFORE_RESUME)
            .build();
    }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): ReactRootView {
        super.onCreateView(inflater, container, savedInstanceState)
        reactRootView = ReactRootView(requireActivity())

        reactRootView.startReactApplication(
            reactInstanceManager,
            getModuleName(),
            savedInstanceState
        )

        return reactRootView
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
    }

    override fun onDestroy() {
        super.onDestroy()
        reactRootView?.unmountReactApplication();
    }

}